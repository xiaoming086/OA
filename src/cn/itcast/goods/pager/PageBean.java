package cn.itcast.goods.pager;

import java.util.List;

/**
 * ��ҳBean�������ڸ���֮�䴫�ݣ�
 * @author qdmmy6
 *
 * @param <T>
 */
public class PageBean<T> {
	private int pc;//��ǰҳ��
	private int tr;//�ܼ�¼��
	private int ps;//ÿҳ��¼��
	private String url;//����·���Ͳ��������磺/BookServlet?method=findXXX&cid=1&bname=2
	private List<T> beanList;
	
	// ������ҳ��
	public int getTp() {
		int tp = tr / ps;
		return tr % ps == 0 ? tp : tp + 1;
	}
	
	public int getPc() {
		return pc;
	}
	public void setPc(int pc) {
		this.pc = pc;
	}
	public int getTr() {
		return tr;
	}
	public void setTr(int tr) {
		this.tr = tr;
	}
	public int getPs() {
		return ps;
	}
	public void setPs(int ps) {
		this.ps = ps;
	}
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}
	public List<T> getBeanList() {
		return beanList;
	}
	public void setBeanList(List<T> beanList) {
		this.beanList = beanList;
	}
}
