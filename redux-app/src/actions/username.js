import actions from './constants';

const ChangeUserName = (value) => {
    return {
        type: actions.CHANGE_USERNAME,
        data: {
            value
        }
    };
}

export  {
    ChangeUserName
};