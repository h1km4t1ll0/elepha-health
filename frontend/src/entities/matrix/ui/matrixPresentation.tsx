import React, {FC} from "react";
import {RegularText} from "shared/ui/Text/RegularText";
import {MatrixComponent} from "entities/matrix/ui/types";
import {SmallText} from "shared/ui/Text/SmallText";
import {BigText} from "shared/ui/Text/BigText";
import {WidgetContainer} from "shared/ui/Containers";
import {StyleProp, TextStyle} from "react-native";
import { Title } from 'shared/ui/Text/Title'

// TODO: посмотреть, справляется ли WidgetContainer,
//  если нет, то заменить на Container
// const Container = styled.View`
//   position: relative;
//   width: 90%;
//   height: 45%;
//   margin-bottom: 5%;
//   margin-top: 5%;
//   margin-left: auto;
//   margin-right: auto;
//   border-radius: 10px;
//   background-color: rgba(168, 168, 166, 0.3);
// `;

export const MatrixPresentation: FC<MatrixComponent> = (props) => {

    return <Title textStyles={{ textAlign: 'center' }}>{props.name}</Title>
}
