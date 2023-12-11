import { MatrixPlayerComponent } from 'features/MatrixPlayer/types';
import { RawMatrix } from 'shared/api';
import {MatrixComponent} from "entities/matrix/ui/types";

export type MatrixWidgetComponent = MatrixPlayerComponent & RawMatrix & MatrixComponent;
