(function () {
    function PageList(options){
        for(var i in options) {
            this[i] = options[i];
        }
        var obj = this;
        this.first.onclick = function () {
            obj.page = 1;
            obj.onChange();
        };
        this.prev.onclick = function () {
            obj.page = (obj.page > 1) ? (obj.page - 1) : 1;
            obj.onChange();
        };
        this.prev.onclick = function () {
            obj.page = (obj.page >= obj.maxPage) ? obj.maxPage :(obj.page + 1);
            obj.onChange();
    };
    this.last,onclick = function () {
        obj.page = obj.maxPage;
        obj.onChange();
    };
}
PageList.prototype.undateStatus = function () {
    this.first.disabled = (this.page <= 1);
    this.prev.disabled = (this.page <= 1);
    this.next.disabled = (this.page >= this.maxPage);
    this.pageNum.innerHTMl = this.page;

};
function Comment(obj) {
    this.obj = obj;

}
Comment.prototype.ajax = function (url, start, complete){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState ==4) {
            if (xhr.status < 200 || xhr.status >= 300 && xhr.status !== 304) {
                alert('服务器异常');
                return;
                 
            } 
            try {
                var obj = JSON.parse(xhr.responseText);
            } catch (e) {
                alert('解析服务器返回信息失败');
                return;
            }
            complete(obj);
        }

    };
    xhr.open('GET',url);
    xhr.send();
    start();
};
Comment.prototype.create = function (data) {
    var html = '';
    for (var i in data) {
        html += '<ul><li>id:'+data[i].id+'  用户名：' + data[i].user + '发表时间：'
        html += data[i].time + '</li>';
        html += '<li>' + data[i].content + '</li></ul>';
    }
    this.obj.innerHTMl = html;
};
function ProgressBar(container) {
    this.container = container;
    this.div = document.createElement('div');
    this.container.appendChild(this.div);
}
ProgressBar.prototype.show = function () {
    this.div.style.width = '70%';
};

})