import Trianglify from 'trianglify';
import { safeColors } from "./constants/colors";
import { getRandomColorIndex } from './utils/get-random-color';

const pattern = Trianglify({
    width: window.innerWidth,
    height: 1000,
    cell_size: 10,
    x_colors: [
        getRandomColorIndex(safeColors),
        getRandomColorIndex(safeColors)
    ],
    y_colors: 'match_x',
});

const canvas = pattern.canvas();
