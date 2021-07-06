
$(document).on('click', '.js-send-form', function(event){
    event.preventDefault();
    let form = $("form").serializeArray(),
        name = $('[name=NAME]'),
        phone = $('[name=PHONE]'),
        data = JSON.stringify({NAME:form[1].value, PHONE:form[0].value}),
        content = $('.modal__content'),
        success = $('.modal__success');

    if(form[1].value === ''){
        $(name).addClass('error');
        $(name).removeClass('success');
    } else {
        $(name).removeClass('error');
        $(name).addClass('success');
    }

    if(form[0].value === ''){
        $(phone).addClass('error');
        $(phone).removeClass('success');
    } else {
        $(phone).removeClass('error');
        $(phone).addClass('success');
    }

    if(phone && name){
        let path = location.pathname + 'assets/form/ajax.php';
        var xhttp = new XMLHttpRequest();
        xhttp.open("POST", path, true);
        xhttp.setRequestHeader("Content-Type", "application/json");
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                let res = JSON.parse(this.response);
                if(res.status === 'ok'){
                    $(content).hide(100);
                    $(success).addClass('active');
                    document.querySelector("form").reset();
                }
            }
        };
        xhttp.send(data);
    }

});