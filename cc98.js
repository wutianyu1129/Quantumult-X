function hideAds(response, url, header) {
    var body = response.body;
    // 使用正则表达式匹配广告位的HTML结构
    var adRegex = /<div style="position: relative; width: 18.75rem; height: 6.25rem;">[\s\S]*?<\/div>/g;
    body = body.replace(adRegex, ""); // 将广告位的HTML结构替换为空，实现隐藏广告

    // 更新响应的内容
    response.body = body;
    $done(response);
}

$done({ response: $response });
