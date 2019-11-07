<?php
// router.php
if (preg_match('/.+same-origin-only.+/', $_SERVER["REQUEST_URI"])) {
	header("X-Frame-Options: SAMEORIGIN");
	readfile($_SERVER["SCRIPT_FILENAME"]);
} else {
	return false;
}
?>
