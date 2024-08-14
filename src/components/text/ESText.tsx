// import React from 'react';
// import {
//   GestureResponderEvent,
//   LayoutChangeEvent,
//   NativeSyntheticEvent,
//   StyleProp,
//   Text,
//   TextLayoutEventData,
//   TextStyle,
// } from 'react-native';

// // import { TEXT_ELLIPSIZE_MODE, TEXT_TYPE } from '../constants'

// import {styles} from './esText-styles';

// /**
//  * interface for Label
//  */
// interface IHKText {
//   /** children is a required prop and it gives the text/child node to be displayed */
//   children?: React.ReactNode;
//   /** ellipsizeMode is a optional prop which only work with `numberOfLines` prop and give the position of ellipsis glyph in the text  */
//   ellipsizeMode?: TEXT_ELLIPSIZE_MODE;
//   /** numberOfLines is a optional prop and used to truncate the text with an ellipsis */
//   numberOfLines?: number;
//   /** onLayout is a optional prop and that invoked on mount and layout changes */
//   onLayout?: (event: LayoutChangeEvent) => void;
//   /** onPress is a optional prop and handle single click on text */
//   onPress?: (event: GestureResponderEvent) => void;
//   /** onTextLayout is a optional prop and invoke on text layout */
//   onTextLayout?: (event: NativeSyntheticEvent<TextLayoutEventData>) => void;
//   /** style  is a optional prop and it gives custom style to the label */
//   style?: StyleProp<TextStyle>;
//   /** type  is a optional prop and it gives type of text like 'label' or 'heading' to apply different styling to text */
//   type?: TEXT_TYPE;
// }

// const ESText: React.FC<IHKText> = props => {
//   const {
//     children,
//     ellipsizeMode = TEXT_ELLIPSIZE_MODE.TAIL,
//     numberOfLines = undefined,
//     onLayout = undefined,
//     onPress = undefined,
//     onTextLayout = undefined,
//     style = {},
//     type = TEXT_TYPE.DEFAULT,
//   } = props;

//   /**
//    * returns the styling for different type of text
//    */
//   const getTextStyle = (textType: TEXT_TYPE) => {
//     let textStyle = {};
//     switch (textType) {
//       case TEXT_TYPE.LABEL:
//         textStyle = styles.label;
//         break;
//       case TEXT_TYPE.HEADING:
//         textStyle = styles.heading;
//         break;
//       case TEXT_TYPE.SUBHEADING:
//         textStyle = styles.subheading;
//         break;
//       case TEXT_TYPE.TITLE:
//         textStyle = styles.title;
//         break;
//       case TEXT_TYPE.SUB_TITLE:
//         textStyle = styles.subtitle;
//         break;
//       default:
//         textStyle = styles.default;
//     }
//     return textStyle;
//   };

//   const textStyle = [getTextStyle(type), style];
//   return (
//     <Text
//       allowFontScaling={false}
//       ellipsizeMode={ellipsizeMode}
//       numberOfLines={numberOfLines}
//       onLayout={onLayout}
//       onPress={onPress}
//       onTextLayout={onTextLayout}
//       style={textStyle}>
//       {children}
//     </Text>
//   );
// };

// export default ESText;
