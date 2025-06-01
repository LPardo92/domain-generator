function domainGenerator() {
    let pronoun = ['the', 'our'];
    let adj = ['great', 'big'];
    let noun = ['jogger', 'racoon'];
    let ext = ['.com', '.net', '.us', '.io'];

    for (let i = 0; i < pronoun.length; i++) {
        for (let a = 0; a < adj.length; a++) {
            for (let n = 0; n < noun.length; n++) {
                for (let e = 0; e < ext.length; e++) {
                    console.log(pronoun[i] + adj[a] + noun[n] + ext[e]);
                }
            }
        }
    }
}

domainGenerator();
