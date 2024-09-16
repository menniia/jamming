let accessToken = "";
const clientId = "06553d9173c047f5bc1f7405a94bf6c3";
const redirectURI = "http://localhost:5173/";
const spotifyBaseUrl = "https://api.spotify.com/v1/";

const Spotify = {
    getAccessToken() {
        if (accessToken) {
            return accessToken;
        }
        const accessTokenURL = window.location.href.match(/access_token=([^&]*)/)
        const expiresInURL = window.location.href.match(/expires_in=([^&]*)/)
        if (accessTokenURL && expiresInURL) {
            accessToken = accessTokenURL[1];
            const expiresIn = Number(expiresInURL[1])
            window.setTimeout(() => (accessToken = ""), expiresIn * 1000);
            window.history.pushState("Access Token", null, "/");
        } else {
            const redirect = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`;
            window.location = redirect;
        }
    },

    async search(term) {
        const token = Spotify.getAccessToken();
        try {
            const response = await fetch(`${spotifyBaseUrl}search?type=track&q=${term}`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const jsonResponse = await response.json();
            if (!jsonResponse.tracks) {
                return [];
            }
            return jsonResponse.tracks.items.map(tracks => ({
                id: tracks.id,
                name: tracks.name,
                artist: tracks.artists[0].name,
                album: tracks.album.name,
                uri: tracks.uri
            }));
        } catch (error) {
            console.log("Error fetching search results", error)
            return [];
        }
    }

}

export default Spotify;