<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Login extends CI_Controller {

	/**
	 * Index Page for this controller.
	 *
	 * Maps to the following URL
	 * 		http://example.com/index.php/welcome
	 *	- or -  
	 * 		http://example.com/index.php/welcome/index
	 *	- or -
	 * Since this controller is set as the default controller in 
	 * config/routes.php, it's displayed at http://example.com/
	 *
	 * So any other public methods not prefixed with an underscore will
	 * map to /index.php/welcome/<method_name>
	 * @see http://codeigniter.com/user_guide/general/urls.html
	 */
	public function index()
	{
		$data = array();
		$data['base_url'] = $this->config->item('base_url');
		$this->load->view('login/login', $data);
	}
	public function checkaccess()
	{	
		$this->load->model('Users_model');
		$data = array();
		$data = $this->Users_model->checkLogin(base64_decode($this->uri->segment(3)),base64_decode($this->uri->segment(4)));
		print "came here";
		exit;
	}
}


