<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class logout extends CI_Controller 
{

	function __construct()
	{
		// this is your constructor
		parent::__construct();
		$this->load->helper('form');
		$this->load->helper('url');
	}




	function index()
	{
		//$this->session->sess_destroy();
		//print $this->config->item('base_url')
		redirect($this->config->item('base_url') . 'login', 'refresh');
	}
}
?>

