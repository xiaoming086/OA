package cn.itcast.goods.user.domain;

public class User {
	
	private String uid;
	private String loginname;
	private String loginpass;
	private String email;
	private boolean status;
	private String activationCode;
	private String reloginpass ;
	private String verifyCode ;
	private String newpass ;
	
	public String getReloginpass() {
		return reloginpass;
	}
	public void setReloginpass(String reloginpass) {
		this.reloginpass = reloginpass;
	}
	public String getVerifyCode() {
		return verifyCode;
	}
	public void setVerifyCode(String verifyCode) {
		this.verifyCode = verifyCode;
	}

	public String getNewpass() {
		return newpass;
	}
	public void setNewpass(String newpass) {
		this.newpass = newpass;
	}
	public String getUid() {
		return uid;
	}
	public void setUid(String uid) {
		this.uid = uid;
	}
	public String getLoginname() {
		return loginname;
	}
	public void setLoginname(String loginname) {
		this.loginname = loginname;
	}
	public String getLoginpass() {
		return loginpass;
	}
	public void setLoginpass(String loginpass) {
		this.loginpass = loginpass;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public boolean isStatus() {
		return status;
	}
	public void setStatus(boolean status) {
		this.status = status;
	}
	public String getActivationCode() {
		return activationCode;
	}
	public void setActivationCode(String activationCode) {
		this.activationCode = activationCode;
	}
	@Override
	public String toString() {
		return "User [uid=" + uid + ", loginname=" + loginname + ", loginpass="
				+ loginpass + ", email=" + email + ", status=" + status
				+ ", activationCode=" + activationCode + ", reloginpass="
				+ reloginpass + ", verifyCode=" + verifyCode + ", newpass="
				+ newpass + ", getReloginpass()=" + getReloginpass()
				+ ", getVerifyCode()=" + getVerifyCode() + ", getNewpass()="
				+ getNewpass() + ", getUid()=" + getUid() + ", getLoginname()="
				+ getLoginname() + ", getLoginpass()=" + getLoginpass()
				+ ", getEmail()=" + getEmail() + ", isStatus()=" + isStatus()
				+ ", getActivationCode()=" + getActivationCode() + "]";
	}
	
	
}
