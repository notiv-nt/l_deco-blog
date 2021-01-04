<?php

$page = $_GET['page'];

// sleep(2);

header('Content-Type: application/json');

if ($page == '/about') {
	$data = file_get_contents('../data/about.json');
}

else if ($page == '/contacts') {
	$data = file_get_contents('../data/contacts.json');
}

else if ($page == '/posts') {
	$data = file_get_contents('../data/posts.json');
}

else if ($page == '/post') {
	$data = file_get_contents('../data/post.json');
}


echo $data;
exit;
