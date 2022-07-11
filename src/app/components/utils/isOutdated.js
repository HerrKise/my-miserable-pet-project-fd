function isOutdated(date) {
    if (Date.now() - date > 10 * 60 * 1000) {
        // 10 minutes
        return true;
    }
    return false;
}

export default isOutdated;
