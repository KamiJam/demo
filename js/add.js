/**
 * Created by Administrator on 2017/2/17.
 */
/**
 * Created by Administrator on 2017/2/6.
 */
/**
 * Created by Administrator on 2017/2/6.
 */
/*spring-add-exhibit*/
var add = {
    init: function () {
        var obUrl = '',tNode;
        $("#clipArea").photoClip({
            width: 200,
            height: 200,
            file: ".file",
            view: "#view",
            ok: "#clipBtn",
            loadStart: function () {
                console.log("照片读取中");
            },
            loadComplete: function () {
                console.log("照片读取完成");
            },
            clipFinish: function (dataURL) {
                add.funUploadFile(dataURL);
                if( $('.file-img').length>=7)$('.tianjia').hide();
            }
        });
        $("#logox").click(function () {
            $(".htmleaf-container").show();
        });
        $("#clipBtn").click(function () {
            $('#logox').hide();
            /*$('.tianjia').remove();*/
            if(!$('.tianjia').get(0)){
                var $li ='<div class="file-img"><img src='+imgsource+'>' +
                    '<input type="hidden" name="banner[]" value="">' + '<div class="delete-button">'+'</div>'+'<div class="progress"></div><div class="m"></div>'+'</div>';
                $('#image-list').append($li+'<div class="tianjia"></div>');
                $('.tianjia').append($('#fl'));
                $('.tianjia input').attr('id','flt');

            }else{
                 $li='<div class="file-img"><img src='+imgsource+'>' +
                     '<input type="hidden" name="banner[]" value="">' + '<div class="delete-button">'+'</div>'+'<div class="progress"></div><div class="m"></div>'+'</div>';
                tNode = document.querySelector('.tianjia');
                $($li).insertBefore(tNode);
            }

            $(".htmleaf-container").hide();
        });

        $('#cancel').on('click',function(){
            $(".htmleaf-container").hide();
        })

        $("#image-list").delegate(".delete-button","click",function(){
            $(this).parent('.file-img').remove();
            if($(".file-img").length==0){
                $('#logox').show().append($('#flt'));
                $('.tianjia').remove();
                $('#logox input').attr('id','fl')
            }
        });
        $("#image-list").delegate("input","click",function(){
            $(".htmleaf-container").show();
        });

        $(".file").change(function () {
            var objUrl = add.getObjectURL(this.files[0]);
            obUrl = objUrl;
            console.log("objUrl = " + objUrl);
            if (objUrl) {
                $("#img0").attr("src", objUrl).show();
            }
            else {
                $("#img0").hide();
            }
        });

       /* if( $('.mui-control-item img').length>=9)$('.edit-tianjia').hide();*/
    },
    funUploadFile: function (base64Codes) {

        var self = this;
        var formData = new FormData();
        //convertBase64UrlToBlob函数是将base64编码转换为Blob
        //append函数的第一个参数是后台获取数据的参数名,在php中用$FILES['imageName']接收，
        formData.append("imageName", self.convertBase64UrlToBlob(base64Codes));
        //ajax 提交form
        $.ajax({
            // 你后台的接收地址
            url: photourl,
            type: "POST",
            data: formData,
            dataType: "json",
            processData: false,         // 告诉jQuery不要去处理发送的数据
            contentType: false,        // 告诉jQuery不要去设置Content-Type请求头
            success: function (data) {

               var  $img = $('.file-img img').last();
               var  $input = $('.file-img input').last();
                if (data.state == 'success') {
                    $('.progress').remove();
                    $('.m').remove();
                    $img.attr('src', data.url);
                    $input.attr('value', data.url);
                    console.log(data.url)
                } else {
                    $img.replaceWith('<span>' + data.msg + '</span>');
                    return;
                }
            },
            xhr: function () {            //在jquery函数中直接使用ajax的XMLHttpRequest对象
                var xhr = new XMLHttpRequest();
                xhr.upload.addEventListener("progress", function (evt) {
                    if (evt.lengthComputable) {
                        var percentComplete = Math.round(evt.loaded * 100 / evt.total);
                        $('.progress').text(percentComplete.toString() + '%');
                        if (percentComplete.toString() == '100') {
                        }
                        console.log("正在提交." + percentComplete.toString() + '%');        //在控制台打印上传进度
                    }
                }, false);
                return xhr;
            }
        });
    },
    convertBase64UrlToBlob: function (urlData) {
        //去掉url的头，并转换为byte
        var bytes = window.atob(urlData.split(',')[1]);

        //处理异常,将ascii码小于0的转换为大于0
        var ab = new ArrayBuffer(bytes.length);
        var ia = new Uint8Array(ab);
        for (var i = 0; i < bytes.length; i++) {
            ia[i] = bytes.charCodeAt(i);
        }
        // 此处type注意与photoClip初始化中的outputType类型保持一致
        return new Blob([ab], {type: 'image/jpeg'});
    },
    getObjectURL: function (file) {
        var url = null;
        if (window.createObjectURL != undefined) { // basic
            url = window.createObjectURL(file);
        } else if (window.URL != undefined) { // mozilla(firefox)
            url = window.URL.createObjectURL(file);
        } else if (window.webkitURL != undefined) { // webkit or chrome
            url = window.webkitURL.createObjectURL(file);
        }
        return url;
    }
}


