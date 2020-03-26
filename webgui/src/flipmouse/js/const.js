window.C = {};

C.ARE_WEBSOCKET_URL = 'ws://' + window.location.hostname + ':8092/ws/astericsData';
C.FLIP_WEBSOCKET_URL = 'ws://' + window.location.hostname + ':1804/';
C.LIVE_VALUE_CONSTANT = 'VALUES:';

C.MAX_LENGTH_ATCMD = 400;
C.LENGTH_ATCMD_PREFIX = 6; //with space (e.g. "AT KW ")
C.AT_CMD_KEYPRESS = 'AT KP';
C.AT_CMD_WRITEWORD = 'AT KW';
C.AT_CMD_BTN_MODE = 'AT BM';

C.AT_CMD_CLICK_MOUSE_L = 'AT CL';
C.AT_CMD_CLICK_MOUSE_R = 'AT CR';
C.AT_CMD_CLICK_MOUSE_M = 'AT CM';
C.AT_CMD_DOUBLECLICK_MOUSE_L = 'AT CD';
C.AT_CMD_PRESSHOLD_MOUSE_L = 'AT PL';
C.AT_CMD_PRESSHOLD_MOUSE_R = 'AT PR';
C.AT_CMD_PRESSHOLD_MOUSE_M = 'AT PM';
C.AT_CMD_RELEASE_MOUSE_L = 'AT RL';
C.AT_CMD_RELEASE_MOUSE_R = 'AT RR';
C.AT_CMD_RELEASE_MOUSE_M = 'AT RM';
C.AT_CMD_MOUSEWHEEL_UP = 'AT WU';
C.AT_CMD_MOUSEWHEEL_DOWN = 'AT WD';

C.AT_CMDS_MOUSE = [C.AT_CMD_CLICK_MOUSE_L, C.AT_CMD_CLICK_MOUSE_R, C.AT_CMD_CLICK_MOUSE_M, C.AT_CMD_DOUBLECLICK_MOUSE_L, C.AT_CMD_PRESSHOLD_MOUSE_L, C.AT_CMD_PRESSHOLD_MOUSE_R, C.AT_CMD_PRESSHOLD_MOUSE_M, C.AT_CMD_RELEASE_MOUSE_L, C.AT_CMD_RELEASE_MOUSE_R, C.AT_CMD_RELEASE_MOUSE_M, C.AT_CMD_MOUSEWHEEL_UP, C.AT_CMD_MOUSEWHEEL_DOWN];

C.AT_CMD_CALIBRATION = 'AT CA';
C.AT_CMD_NEXT_SLOT = 'AT NE';
C.AT_CMD_LOAD_SLOT = 'AT LO';
C.AT_CMD_PLAY_INFRARED = 'AT IP';
C.AT_CMD_MAKRO = 'AT MA';
C.AT_CMD_NO_CMD = 'AT NC';

C.AT_CMD_MQTT_PUBLISH = 'AT MQ';
C.AT_CMD_REST = 'AT RE';

C.AT_CMD_IR_RECORD = 'AT IR';
C.AT_CMD_IR_PLAY = 'AT IP';
C.AT_CMD_IR_DELETE = 'AT IC';
C.AT_CMD_IR_LIST = 'AT IL';
C.AT_CMD_IR_DELETEALL = 'AT IW';

C.AT_CMD_MQTT_BROKER = 'AT MH';
C.AT_CMD_MQTT_DELIMITER = 'AT ML';
C.AT_CMD_WIFI_NAME = 'AT WH';
C.AT_CMD_WIFI_PASSWORD = 'AT WP';

C.AT_CMDS_FLIP = [C.AT_CMD_CALIBRATION, C.AT_CMD_NEXT_SLOT, C.AT_CMD_LOAD_SLOT, C.AT_CMD_MQTT_PUBLISH, C.AT_CMD_REST, C.AT_CMD_NO_CMD];

C.ADDITIONAL_FIELD_TEXT = 'ADDITIONAL_FIELD_TEXT';
C.ADDITIONAL_FIELD_SELECT = 'ADDITIONAL_FIELD_SELECT';
C.ADDITIONAL_DATA_CMDS = [C.AT_CMD_LOAD_SLOT, C.AT_CMD_KEYPRESS, C.AT_CMD_WRITEWORD];

C.KEYCODE_MAPPING = [];
C.PRINTABLE_KEYCODES = [];
C.KEYCODE_PREFIX = 'KEY_';
C.FLIP_KEYCODE_ALT_GR = 'KEY_RIGHT_ALT'; //is really Ctrl + Alt
C.JS_KEYCODE_SHIFT = 16;
C.JS_KEYCODE_CTRL = 17;
C.JS_KEYCODE_ALT = 18;
C.JS_KEYCODE_BACKSPACE = 8;
C.JS_KEYCODE_SPACE = 32;
C.JS_KEYCODE_TAB = 9;
C.JS_KEYCODE_GUI = 91; //Windows / Mac key

//A-Z
for (var code = 65; code <= 90; code++) {
    C.KEYCODE_MAPPING[code] = C.KEYCODE_PREFIX + String.fromCharCode(code);
    C.PRINTABLE_KEYCODES.push(code);
}

//0-9
for (var code = 48; code <= 57; code++) {
    C.KEYCODE_MAPPING[code] = C.KEYCODE_PREFIX + String.fromCharCode(code);
    C.PRINTABLE_KEYCODES.push(code);
}

//F1-F12
for (var code = 112; code <= 123; code++) {
    C.KEYCODE_MAPPING[code] = C.KEYCODE_PREFIX + 'F' + (code - 111);
}

C.KEYCODE_MAPPING[37] = 'KEY_LEFT';
C.KEYCODE_MAPPING[38] = 'KEY_UP';
C.KEYCODE_MAPPING[39] = 'KEY_RIGHT';
C.KEYCODE_MAPPING[40] = 'KEY_DOWN';
C.KEYCODE_MAPPING[13] = 'KEY_ENTER';
C.KEYCODE_MAPPING[27] = 'KEY_ESC';
C.KEYCODE_MAPPING[C.JS_KEYCODE_BACKSPACE] = 'KEY_BACKSPACE';
C.KEYCODE_MAPPING[C.JS_KEYCODE_TAB] = 'KEY_TAB';
C.KEYCODE_MAPPING[36] = 'KEY_HOME'; //pos1
C.KEYCODE_MAPPING[33] = 'KEY_PAGE_UP';
C.KEYCODE_MAPPING[34] = 'KEY_PAGE_DOWN';
C.KEYCODE_MAPPING[46] = 'KEY_DELETE';
C.KEYCODE_MAPPING[45] = 'KEY_INSERT';
C.KEYCODE_MAPPING[35] = 'KEY_END';
C.KEYCODE_MAPPING[144] = 'KEY_NUM_LOCK';
C.KEYCODE_MAPPING[145] = 'KEY_SCROLL_LOCK';
C.KEYCODE_MAPPING[C.JS_KEYCODE_SPACE] = 'KEY_SPACE';
C.KEYCODE_MAPPING[20] = 'KEY_CAPS_LOCK';
C.KEYCODE_MAPPING[19] = 'KEY_PAUSE';
C.KEYCODE_MAPPING[C.JS_KEYCODE_SHIFT] = 'KEY_SHIFT';
C.KEYCODE_MAPPING[C.JS_KEYCODE_CTRL] = 'KEY_CTRL';
C.KEYCODE_MAPPING[C.JS_KEYCODE_ALT] = 'KEY_ALT';
C.KEYCODE_MAPPING[C.JS_KEYCODE_GUI] = 'KEY_GUI'; //Windows
C.KEYCODE_MAPPING[92] = 'KEY_RIGHT_GUI';

C.SUPPORTED_KEYCODES = [];
for (var i = 0; i < 300; i++) {
    if (C.KEYCODE_MAPPING[i]) {
        C.SUPPORTED_KEYCODES.push(i);
    }
}

C.DEFAULT_CONFIGURATION = ['AT AX 60', 'AT AY 60', 'AT DX 20', 'AT DY 20', 'AT MS 50', 'AT AC 50', 'AT TS 500', 'AT TP 525', 'AT WS 3', 'AT SP 700', 'AT SS 300', 'AT MM 1', 'AT GU 50', 'AT GD 50', 'AT GL 50', 'AT GR 50', 'AT RO 0', 'AT BT 1', 'AT BM 01', 'AT NE', 'AT BM 02', 'AT KP KEY_ESC', 'AT BM 03', 'AT NC', 'AT BM 04', 'AT KP KEY_UP', 'AT BM 05', 'AT KP KEY_DOWN', 'AT BM 06', 'AT KP KEY_LEFT', 'AT BM 07', 'AT KP KEY_RIGHT', 'AT BM 08', 'AT PL', 'AT BM 09', 'AT NC', 'AT BM 10', 'AT CR', 'AT BM 11', 'AT CA', 'AT BM 12', 'AT NC', 'AT BM 13', 'AT NC', 'AT BM 14', 'AT NC', 'AT BM 15', 'AT NC', 'AT BM 16', 'AT NC', 'AT BM 17', 'AT NC', 'AT BM 18', 'AT NC', 'AT BM 19', 'AT NC'];
C.DEFAULT_SLOTNAME = 'mouse';

C.BTN_MODE_BUTTON_1 = 'BTN_MODE_BUTTON_1';
C.BTN_MODE_BUTTON_2 = 'BTN_MODE_BUTTON_2';
C.BTN_MODE_BUTTON_3 = 'BTN_MODE_BUTTON_3';
C.BTN_MODE_STICK_UP = 'BTN_MODE_STICK_UP';
C.BTN_MODE_STICK_DOWN = 'BTN_MODE_STICK_DOWN';
C.BTN_MODE_STICK_LEFT = 'BTN_MODE_STICK_LEFT';
C.BTN_MODE_STICK_RIGHT = 'BTN_MODE_STICK_RIGHT';
C.BTN_MODE_SIP = 'BTN_MODE_SIP';
C.BTN_MODE_STRONG_SIP = 'BTN_MODE_STRONG_SIP';
C.BTN_MODE_PUFF = 'BTN_MODE_PUFF';
C.BTN_MODE_STRONG_PUFF = 'BTN_MODE_STRONG_PUFF';
C.BTN_MODES = [C.BTN_MODE_BUTTON_1, C.BTN_MODE_BUTTON_2, C.BTN_MODE_BUTTON_3,
    C.BTN_MODE_STICK_UP, C.BTN_MODE_STICK_DOWN, C.BTN_MODE_STICK_LEFT, C.BTN_MODE_STICK_RIGHT,
    C.BTN_MODE_SIP, C.BTN_MODE_STRONG_SIP, C.BTN_MODE_PUFF, C.BTN_MODE_STRONG_PUFF];
C.BTN_MODES_WITHOUT_STICK = [C.BTN_MODE_BUTTON_1, C.BTN_MODE_BUTTON_2, C.BTN_MODE_BUTTON_3,
    C.BTN_MODE_SIP, C.BTN_MODE_STRONG_SIP, C.BTN_MODE_PUFF, C.BTN_MODE_STRONG_PUFF];

C.LEARN_CAT_KEYBOARD = 'LEARN_CAT_KEYBOARD';
C.LEARN_CAT_MOUSE = 'LEARN_CAT_MOUSE';
C.LEARN_CAT_IR = 'LEARN_CAT_IR';
C.LEARN_CAT_FLIPACTIONS = 'LEARN_CAT_FLIPACTIONS';
C.LEARN_CAT_CUSTOM = 'LEARN_CAT_CUSTOM';

C.FLIPMOUSE_MODE_MOUSE = 'MODE_MOUSE';
C.FLIPMOUSE_MODE_ALT = 'MODE_ALTERNATIVE';
C.FLIPMOUSE_MODE_JOYSTICK= 'MODE_JOYSTICK';
C.FLIPMOUSE_MODES = [C.FLIPMOUSE_MODE_ALT, C.FLIPMOUSE_MODE_MOUSE, C.FLIPMOUSE_MODE_JOYSTICK];
