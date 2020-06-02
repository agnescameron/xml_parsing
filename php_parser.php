
<?php

function utf8_for_xml($string)
{
    return preg_replace ('/[^\x{0009}\x{000a}\x{000d}\x{0020}-\x{D7FF}\x{E000}-\x{FFFD}]+/u', ' ', $string);
}


libxml_use_internal_errors(true);
$filename = 'wordsinspace.xml';
$string = file_get_contents($filename);

$xml = utf8_for_xml($string);

$shannon = new SimpleXMLElement($xml);

if ($shannon === false) {
    echo "Failed loading XML\n";
    foreach(libxml_get_errors() as $error) {
        echo "\t", $error->message;
    }
}
else {
		echo $shannon->channel->title;
		echo $shannon->channel->link;
	}
?>
