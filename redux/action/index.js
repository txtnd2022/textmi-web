export const select_controller = (data, style) => {
    return {
        type: 'SELECT_CONTROLLER',
        payload: {
            data,
            style
        }
    }
}
