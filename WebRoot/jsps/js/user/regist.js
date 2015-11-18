$(function() {
	/*
	 * 1. �õ����еĴ�����Ϣ��ѭ������֮������һ��������ȷ���Ƿ���ʾ������Ϣ��
	 */
	$(".errorClass").each(function() {
		showError($(this));//����ÿ��Ԫ�أ�ʹ��ÿ��Ԫ��������showError����
	});
	
	/*
	 * 2. �л�ע�ᰴť��ͼƬ
	 */
	$("#submitBtn").hover(
		function() {
			$("#submitBtn").attr("src", "/goods/images/regist2.jpg");
		},
		function() {
			$("#submitBtn").attr("src", "/goods/images/regist1.jpg");
		}
	);
	
	/*
	 * 3. �����õ��������ش�����Ϣ
	 */
	$(".inputClass").focus(function() {
		var labelId = $(this).attr("id") + "Error";//ͨ��������ҵ���Ӧ��label��id
		$("#" + labelId).text("");//��label��������գ�
		showError($("#" + labelId));//����û����Ϣ��label
	});
	
	/*
	 * 4. �����ʧȥ�������У��
	 */
	$(".inputClass").blur(function() {
		var id = $(this).attr("id");//��ȡ��ǰ������id
		var funName = "validate" + id.substring(0,1).toUpperCase() + id.substring(1) + "()";//�õ���Ӧ��У�麯����
		eval(funName);//ִ�к�������
	});
	
	/*
	 * 5. ���ύʱ����У��
	 */
	$("#registForm").submit(function() {
		var bool = true;//��ʾУ��ͨ��
		if(!validateLoginname()) {
			bool = false;
		}
		if(!validateLoginpass()) {
			bool = false;
		}
		if(!validateReloginpass()) {
			bool = false;
		}
		if(!validateEmail()) {
			bool = false;
		}
		if(!validateVerifyCode()) {
			bool = false;
		}
		
		return bool;
	});
});

/*
 * ��¼��У�鷽��
 */
function validateLoginname() {
	var id = "loginname";
	var value = $("#" + id).val();//��ȡ���������
	/*
	 * 1. �ǿ�У��
	 */
	if(!value) {
		/*
		 * ��ȡ��Ӧ��label
		 * ��Ӵ�����Ϣ
		 * ��ʾlabel
		 */
		$("#" + id + "Error").text("�û�������Ϊ�գ�");
		showError($("#" + id + "Error"));
		return false;
	}
	/*
	 * 2. ����У��
	 */
	if(value.length < 3 || value.length > 20) {
		/*
		 * ��ȡ��Ӧ��label
		 * ��Ӵ�����Ϣ
		 * ��ʾlabel
		 */
		$("#" + id + "Error").text("�û������ȱ�����3 ~ 20֮�䣡");
		showError($("#" + id + "Error"));
		false;
	}
	/*
	 * 3. �Ƿ�ע��У��
	 */
	$.ajax({
		url:"/goods/UserServlet",//Ҫ�����servlet
		data:{method:"ajaxValidateLoginname", loginname:value},//���������Ĳ���
		type:"POST",
		dataType:"json",
		async:false,//�Ƿ��첽����������첽����ô����ȷ��������أ�����������������������ˡ�
		cache:false,
		success:function(result) {
			if(!result) {//���У��ʧ��
				$("#" + id + "Error").text("�û����ѱ�ע�ᣡ");
				showError($("#" + id + "Error"));
				return false;
			}
		}
	});
	return true;
}

/*
 * ��¼����У�鷽��
 */
function validateLoginpass() {
	var id = "loginpass";
	var value = $("#" + id).val();//��ȡ���������
	/*
	 * 1. �ǿ�У��
	 */
	if(!value) {
		/*
		 * ��ȡ��Ӧ��label
		 * ��Ӵ�����Ϣ
		 * ��ʾlabel
		 */
		$("#" + id + "Error").text("���벻��Ϊ�գ�");
		showError($("#" + id + "Error"));
		return false;
	}
	/*
	 * 2. ����У��
	 */
	if(value.length < 3 || value.length > 20) {
		/*
		 * ��ȡ��Ӧ��label
		 * ��Ӵ�����Ϣ
		 * ��ʾlabel
		 */
		$("#" + id + "Error").text("���볤�ȱ�����3 ~ 20֮�䣡");
		showError($("#" + id + "Error"));
		false;
	}
	return true;	
}

/*
 * ȷ������У�鷽��
 */
function validateReloginpass() {
	var id = "reloginpass";
	var value = $("#" + id).val();//��ȡ���������
	/*
	 * 1. �ǿ�У��
	 */
	if(!value) {
		/*
		 * ��ȡ��Ӧ��label
		 * ��Ӵ�����Ϣ
		 * ��ʾlabel
		 */
		$("#" + id + "Error").text("ȷ�����벻��Ϊ�գ�");
		showError($("#" + id + "Error"));
		return false;
	}
	/*
	 * 2. ���������Ƿ�һ��У��
	 */
	if(value != $("#loginpass").val()) {
		/*
		 * ��ȡ��Ӧ��label
		 * ��Ӵ�����Ϣ
		 * ��ʾlabel
		 */
		$("#" + id + "Error").text("�������벻һ�£�");
		showError($("#" + id + "Error"));
		false;
	}
	return true;	
}

/*
 * EmailУ�鷽��
 */
function validateEmail() {
	var id = "email";
	var value = $("#" + id).val();//��ȡ���������
	/*
	 * 1. �ǿ�У��
	 */
	if(!value) {
		/*
		 * ��ȡ��Ӧ��label
		 * ��Ӵ�����Ϣ
		 * ��ʾlabel
		 */
		$("#" + id + "Error").text("Email����Ϊ�գ�");
		showError($("#" + id + "Error"));
		return false;
	}
	/*
	 * 2. Email��ʽУ��
	 */
	if(!/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(value)) {
		/*
		 * ��ȡ��Ӧ��label
		 * ��Ӵ�����Ϣ
		 * ��ʾlabel
		 */
		$("#" + id + "Error").text("�����Email��ʽ��");
		showError($("#" + id + "Error"));
		false;
	}
	/*
	 * 3. �Ƿ�ע��У��
	 */
	$.ajax({
		url:"/goods/UserServlet",//Ҫ�����servlet
		data:{method:"ajaxValidateEmail", email:value},//���������Ĳ���
		type:"POST",
		dataType:"json",
		async:false,//�Ƿ��첽����������첽����ô����ȷ��������أ�����������������������ˡ�
		cache:false,
		success:function(result) {
			if(!result) {//���У��ʧ��
				$("#" + id + "Error").text("Email�ѱ�ע�ᣡ");
				showError($("#" + id + "Error"));
				return false;
			}
		}
	});
	return true;		
}

/*
 * ��֤��У�鷽��
 */
function validateVerifyCode() {
	var id = "verifyCode";
	var value = $("#" + id).val();//��ȡ���������
	/*
	 * 1. �ǿ�У��
	 */
	if(!value) {
		/*
		 * ��ȡ��Ӧ��label
		 * ��Ӵ�����Ϣ
		 * ��ʾlabel
		 */
		$("#" + id + "Error").text("��֤�벻��Ϊ�գ�");
		showError($("#" + id + "Error"));
		return false;
	}
	/*
	 * 2. ����У��
	 */
	if(value.length != 4) {
		/*
		 * ��ȡ��Ӧ��label
		 * ��Ӵ�����Ϣ
		 * ��ʾlabel
		 */
		$("#" + id + "Error").text("�������֤�룡");
		showError($("#" + id + "Error"));
		false;
	}
	/*
	 * 3. �Ƿ���ȷ
	 */
	$.ajax({
		url:"/goods/UserServlet",//Ҫ�����servlet
		data:{method:"ajaxValidateVerifyCode", verifyCode:value},//���������Ĳ���
		type:"POST",
		dataType:"json",
		async:false,//�Ƿ��첽����������첽����ô����ȷ��������أ�����������������������ˡ�
		cache:false,
		success:function(result) {
			if(!result) {//���У��ʧ��
				$("#" + id + "Error").text("��֤�����");
				showError($("#" + id + "Error"));
				return false;
			}
		}
	});
	return true;		
}

/*
 * �жϵ�ǰԪ���Ƿ�������ݣ����������ʾ����ҳ�治��ʾ��
 */
function showError(ele) {
	var text = ele.text();//��ȡԪ�ص�����
	if(!text) {//���û������
		ele.css("display", "none");//����Ԫ��
	} else {//���������
		ele.css("display", "");//��ʾԪ��
	}
}

/*
 * ��һ����֤��
 */
function _hyz() {
	/*
	 * 1. ��ȡ<img>Ԫ��
	 * 2. ������������src
	 * 3. ʹ�ú�������Ӳ���
	 */
	$("#imgVerifyCode").attr("src", "/goods/VerifyCodeServlet?a=" + new Date().getTime());
}
