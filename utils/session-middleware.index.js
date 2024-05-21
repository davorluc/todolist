export const sessionUserSettings = (req, res, next) => {
    const userSettings = req.session?.userSettings || {orderBy: 'todoName', orderDirection: -1, showCompleted: true};
    const {orderBy, orderDirection, hideCompleted} = req.query;

    orderBy && (userSettings.orderBy = orderBy);
    orderDirection && (userSettings.orderDirection = orderDirection * -1);
    hideCompleted !== undefined && (userSettings.showCompleted = !userSettings.showCompleted);

    req.userSettings = req.session.userSettings = userSettings;
    res.locals = req.userSettings; // visible within views

    next();
};
