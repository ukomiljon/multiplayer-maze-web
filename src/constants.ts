import { ToastPosition } from 'react-toastify';
import { Control, Cord, Direction, Link, StringMap } from './type';

const LINKS: Array<Link> = [
  { name: 'Home', url: 'https://shuby-mao.web.app/' },
  { name: 'Project Page', url: 'https://shuby-mao.web.app/projects/web-multiplayer-maze' },
  { name: 'Multiplayer Maze', url: '/' },
  { name: 'Offline Maze', url: '/offline' },
  { name: 'Generation Demo', url: '/generation-demo' }
];

export const FIREBASE_CONFIG = {
  projectId: 'maze-a2b08',
  apiKey: 'AIzaSyAfNFU1GhESw6oZ1sY2kUPJwRwXDEyDnF0',
  authDomain: 'maze-a2b08.firebaseapp.com',
  databaseURL: 'https://maze-a2b08-default-rtdb.asia-southeast1.firebasedatabase.app/',
  storageBucket: 'maze-a2b08.appspot.com'
};

const position: ToastPosition = 'top-right';

export const TOAST_CONFIG = {
  position,
  autoClose: 5000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined
};

export const KEY_MAP: StringMap = {
  ArrowLeft: Direction.LEFT,
  a: Direction.LEFT,
  A: Direction.LEFT,
  ArrowUp: Direction.TOP,
  w: Direction.TOP,
  W: Direction.TOP,
  ArrowRight: Direction.RIGHT,
  d: Direction.RIGHT,
  D: Direction.RIGHT,
  ArrowDown: Direction.DOWN,
  s: Direction.DOWN,
  S: Direction.DOWN
};
export const INSTRUCTION =
  'Control: w,a,s,d or ↑,←,↓,→. Use on-screen joystick on a touch screen device.';
export const IDLE_CONTROL: Control = { magnitude: 0, angle: 0 };
export const ID_CHARSET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
export const ID_LEN = 10;
export const PLAYER_RADIUS_TO_CELL_RATIO = 0.15;
export const MAX_SPEED = 0.05;
export const START_POS: Cord = { r: 0.5, c: 0.5 };
export const GRID_PADDING = 5;
export const START_COLOR = '#DC2626';
export const END_COLOR = '#10B981';
export const BORDER_COLOR = '#000000';
export const INDICATOR_COLOR = '#FF0000';
export const DEFAULT_PLAYER_COLOR = '#FBBF24';

export default LINKS;
