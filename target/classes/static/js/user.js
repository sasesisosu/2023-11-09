let index = {
    init:function(){
        $("#btn-save").on("click", ()=>{ // function(){}대신 ()=>{}를 사용하는 이유는 this를 바인딩하기 위해서 사용
            this.save();
        });

        $("#btn-login").on("click", ()=>{ // function(){}대신 ()=>{}를 사용하는 이유는 this를 바인딩하기 위해서 사용
            this.login();
        });
    },

    save:function(){
        let data = {
            username: $("#username").val(),
            password: $("#password").val(),
            email: $("#email").val()
        };

        // ajax호출 시 default가 비동기 호출
        $.ajax({
            type: "POST",
            url: "/blog/api/user",
            data: JSON.stringify(data), // http body 데이터
            contentType: "application/json; charset=utf-8", // body데이터가 어떤 타입인지(MIME)
            dataType: "json" // 요청을 서버로해서 응답이 왔을 때 기본적으로 대부분 String(문자열)임, json으로 하면 => javascript오브젝트로 변경
        }).done(function(responseDTO){
            alert("회원가입이 완료되었습니다.");
            location.href="/blog";
        }).fail(function(error){
             alert(JSON.stringify(error));
        }); // ajax 통신을 이용해서 3개의 파라미터(데이터)를 json으로 변경하여 insert 요청

    },

    login:function(){
            let data = {
                username: $("#username").val(),
                password: $("#password").val()
            };

            // ajax호출 시 default가 비동기 호출
            $.ajax({
                type: "POST",
                url: "/blog/api/user/login",
                data: JSON.stringify(data), // http body 데이터
                contentType: "application/json; charset=utf-8", // body데이터가 어떤 타입인지(MIME)
                dataType: "json" // 요청을 서버로해서 응답이 왔을 때 기본적으로 대부분 String(문자열)임, json으로 하면 => javascript오브젝트로 변경
            }).done(function(responseDTO){
                alert("로그인이 완료되었습니다.");
                location.href="/blog";
            }).fail(function(error){
                 alert(JSON.stringify(error));
            }); // ajax 통신을 이용해서 3개의 파라미터(데이터)를 json으로 변경하여 insert 요청

        }

}

index.init();