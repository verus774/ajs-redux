export default ($http) => {
    const getCards = () => {
        return $http.get('/assets/data/cards.json')
            .then(res => res.data)
            .catch(console.log);
    };

    return {
        getCards,
    };
}
