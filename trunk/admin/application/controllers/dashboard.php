<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Dashboard extends CI_Controller 
{

	

	public function index()
	{
		$data = array();
		$data['base_url'] = $this->config->item('base_url');
		$this->load->view('admin_header', $data);
		$this->load->view('admin_navigation', $data);
		$this->load->view('admin_footer', $data);
	}
}


?>
