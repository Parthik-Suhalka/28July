const API = "api_key=637526fb495fa4159cc28bf14a864c87";

fetch(`https://api.themoviedb.org/3/trending/all/week?${API}`)
.then(res => res.json())
.then(data => console.log(data.results[0]))



// https://api.themoviedb.org/3/movie/298618/images/?api_key=637526fb495fa4159cc28bf14a864c87