const callAPI = async() => {
    let url = new URL(`https://dapi.kakao.com/v3/search/book?target=title`);

    let header = new Headers({"Authorization": "${e85f6f4b0605a9a2fdb8c5ac2d415141}"});

    let response = await fetch(url,{headers: header});
    let data = await response.json();
    console.log(data);
}

callAPI();