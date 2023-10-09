let body = $response.body;
body = body.replace(/<div class="topicInfo-ads">[\s\S]*?<\/div>/g, "");
$done({ body });
