import React, {useState, useEffect} from 'react';
import {
  View,
  TextInput,
  Button,
  FlatList,
  Text,
  ImageBackground,
} from 'react-native';

import axios from 'axios';
import socket from '../../../services/socket';
import {styles} from './chat-styles';
import {colors} from '../../../theme';
import CHInputBox from '../../../components/input-box/CHInputBox';
import {APP_ICON_TYPES} from '../../../common/constants';
import CHAppIcon from '../../../components/app-icon/CHAppIcon';
import CHAppBackground from '../../../components/app-background/CHAppBackground';

interface ChatScreenProps {
  route: any;
  navigation: any;
}

interface Message {
  _id: string;
  sender: string;
  receiver: string;
  message: string;
  timestamp: string;
}

const Chats: React.FC<ChatScreenProps> = ({route}) => {
  const {userId, chatUserId} = route.params;
  const [message, setMessage] = useState<string>('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [arrowPressed, setArrowPressed] = useState(false);
  const handleIconPressIn = () => {
    setArrowPressed(true);
  };
  const handleIconPressOut = () => {
    setArrowPressed(false);
  };
  useEffect(() => {
    axios
      .get<Message[]>(
        `http://192.168.29.77:5000/api/messages/${userId}/${chatUserId}`,
      )
      .then(response => {
        setMessages(response.data);
        console.log('response======', response.data);
      })
      .catch(error => console.error(error));

    socket.on('receiveMessage', (newMessage: Message) => {
      setMessages(prev => [...prev, newMessage]);
    });

    return () => {
      socket.off('receiveMessage');
    };
  }, [userId, chatUserId]);

  const sendMessage = async () => {
    if (message.length > 0) {
      const msg: Omit<Message, '_id' | 'timestamp'> = {
        sender: userId,
        receiver: chatUserId,
        message,
      };
      socket.emit('sendMessage', msg);
      setMessages(prev => [
        ...prev,
        {...msg, _id: `${Date.now()}`, timestamp: new Date().toISOString()},
      ]);

      try {
        const response = await axios.post(
          'http://192.168.29.77:5000/api/messages/send',
          msg,
        );

        setMessages(prev =>
          prev.map(m =>
            m._id.startsWith('temp-') &&
            m.sender === msg.sender &&
            m.receiver === msg.receiver &&
            m.message === msg.message
              ? response.data
              : m,
          ),
        );
      } catch (error) {
        console.error('Failed to send message via REST API', error);
      }
      setMessage('');
    } else {
      return null;
    }
  };

  const renderItem = ({item}: {item: Message}) => {
    // const messageContainerColor =
    //   item.sender === userId ? colors.secondary : colors.palette.white;
    // const messageContainerBorderRadius =
    //   item.sender === userId
    //     ? {borderBottomRightRadius: 0}
    //     : {borderTopLeftRadius: 5};

    return (
      <View>
        {item.sender === userId ? (
          <Text
            style={[
              styles.messageContainer,
              {backgroundColor: colors.primary},
              {borderBottomRightRadius: 0},
              {alignSelf: 'flex-end'},
              {color: colors.palette.white},
            ]}>
            {item.message}
          </Text>
        ) : (
          <Text
            style={[
              styles.messageContainer,
              {backgroundColor: colors.palette.white},
              {borderBottomLeftRadius: 0},
              {alignSelf: 'flex-start'},
              {color: colors.palette.black},
            ]}>
            {item.message}
          </Text>
        )}
      </View>
    );
  };

  return (
    <CHAppBackground>
      <View style={styles.container}>
        <FlatList
          data={messages}
          renderItem={renderItem}
          keyExtractor={item => item._id}
          showsVerticalScrollIndicator={false}
        />
        <View style={styles.chatInputContainer}>
          <CHInputBox
            placeholder={'Type here a Message'}
            value={message}
            onChangeText={setMessage}
            secureTextEntry={false}
            multiline={false}
            style={{flex: 1, marginRight: 10, marginBottom: 0}}
            inputStyle={{borderRadius: 50, paddingLeft: 20}}
          />
          <CHAppIcon
            name={'send'}
            type={APP_ICON_TYPES.FONT_AWESOME}
            size={24}
            iconPress={sendMessage}
            color={arrowPressed ? colors.primary : colors.palette.black60}
            iconPressIn={handleIconPressIn}
            iconPressOut={handleIconPressOut}
          />
        </View>
      </View>
    </CHAppBackground>
  );
};

export default Chats;
