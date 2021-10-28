import axios from "axios";

const getDrinks = async ({ ulr }) => {
    try {
        axios
            .get(url)
            .then(response => {
                const posts = response.data;
                setPosts(posts);
            })
            .catch(function (error) {
                console.log(error);
            });
    } catch (error) {
        console.log(err);
    }
};