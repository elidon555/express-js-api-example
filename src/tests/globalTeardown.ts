module.exports = async () => {
    await global.__TEST_SERVER__.close();
};