$(window).on("load", function() {
    setInterval(function() {
        const date = new Date();
        const hour = date.getHours();
        const minute = date.getMinutes();
        const teiseks = date.getSeconds();
        $(".hour").css("transform", `translate(-50%,-50%) rotate(${hour * 30}deg)`);
        $(".minute").css("transform", `translate(-50%,-50%) rotate(${minute * 6}deg)`);
        $(".teiseks").css("transform", `translate(-50%,-50%) rotate(${teiseks * 6}deg)`);
    }, 1000);
});

//# sourceMappingURL=index.72a83a3b.js.map
