$(function() {
	/*
	 * 1. �õ�¼��ť�ڵõ���ʧȥ����ʱ�л�ͼƬ
	 */
	$("#submit").hover(
		function() {
			$("#submit").attr("src", "/goods/images/login2.jpg");
		},
		function() {
			$("#submit").attr("src", "/goods/images/login1.jpg");
		}
	);
	
	/*
	 * 2. ��ע�ᰴť���submit()�¼�����ɱ�У��
	 */
	$("#submit").submit(function(){
		$("#msg").text("");
		var bool = true;
		$(".input").each(function() {
			var inputName = $(this).attr("name");
			if(!invokeValidateFunction(inputName)) {
				bool = false;
			}
		});
		return bool;
	});
	
	/*
	 * 3. �����õ�����ʱ���ش�����Ϣ
	 */
	$(".input").focus(function() {
		var inputName = $(this).attr("name");
		$("#" + inputName + "Error").css("display", "none");
	});
	
	/*
	 * 4. ������ƶ�����ʱ����У��
	 */
	$(".input").blur(function() {
		var inputName = $(this).attr("name");
		invokeValidateFunction(inputName);
	})
});

/*
 * ����input���ƣ����ö�Ӧ��validate������
 * ����input����Ϊ��loginname����ô����validateLoginname()������
 */
function invokeValidateFunction(inputName) {
	inputName = inputName.substring(0, 1).toUpperCase() + inputName.substring(1);
	var functionName = "validate" + inputName;
	return eval(functionName + "()");	
}

/*
 * У���¼��
 */
function validateLoginname() {
	var bool = true;
	$("#loginnameError").css("display", "none");
	var value = $("#loginname").val();
	if(!value) {// �ǿ�У��
		$("#loginnameError").css("display", "");
		$("#loginnameError").text("�û�������Ϊ�գ�");
		bool = false;
	} else if(value.length < 3 || value.length > 20) {//����У��
		$("#loginnameError").css("display", "");
		$("#loginnameError").text("�û������ȱ�����3 ~ 20֮�䣡");
		bool = false;
	}
	return bool;
}

/*
 * У������
 */
function validateLoginpass() {
	var bool = true;
	$("#loginpassError").css("display", "none");
	var value = $("#loginpass").val();
	if(!value) {// �ǿ�У��
		$("#loginpassError").css("display", "");
		$("#loginpassError").text("���벻��Ϊ�գ�");
		bool = false;
	} else if(value.length < 3 || value.length > 20) {//����У��
		$("#loginpassError").css("display", "");
		$("#loginpassError").text("���볤�ȱ�����3 ~ 20֮�䣡");
		bool = false;
	}
	return bool;
}

/*
 * У����֤��
 */
function validateVerifyCode() {
	var bool = true;
	$("#verifyCodeError").css("display", "none");
	var value = $("#verifyCode").val();
	if(!value) {//�ǿ�У��
		$("#verifyCodeError").css("display", "");
		$("#verifyCodeError").text("��֤�벻��Ϊ�գ�");
		bool = false;
	} else if(value.length != 4) {//���Ȳ�Ϊ4���Ǵ����
		$("#verifyCodeError").css("display", "");
		$("#verifyCodeError").text("�������֤�룡");
		bool = false;
	} else {//��֤���Ƿ���ȷ
		$.ajax({
			cache: false,
			async: false,
			type: "POST",
			dataType: "json",
			data: {method: "ajaxValidateVerifyCode", verifyCode: value},
			url: "/goods/UserServlet",
			success: function(flag) {
				if(!flag) {
					$("#verifyCodeError").css("display", "");
					$("#verifyCodeError").text("�������֤�룡");
					bool = false;					
				}
			}
		});
	}
	return bool;
}
