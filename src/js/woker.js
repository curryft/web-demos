onmessage = function (e) {
    console.log(e.data);
    ajax({
        url: 'http://baidu.com',
        type: 'GET',
        success: function (data) {

        }
    });
postMessage("2222")
}
