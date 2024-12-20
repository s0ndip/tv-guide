// pages/api/s0ndip_mb.m3u.js

const bannerChannels = [
    {
        "tvg_id": "AajTak.in",
        "tvg_logo": "https://i.postimg.cc/QMbt3Sy9/aaj-tak.png",
        "tvg_chno": 101,
        "group_title": "News",
        "name": "Aaj Tak",
        "stream_url": "https://feeds.intoday.in/aajtak/api/aajtakhd/master.m3u8",
        "clearkey": null,
        "stream_headers": null
    },
    {
        "tvg_id": "ABPNews.in",
        "tvg_logo": "https://i.postimg.cc/C1xKLD3v/abp-news.png",
        "tvg_chno": 102,
        "group_title": "News",
        "name": "ABP News",
        "stream_url": "https://d35j504z0x2vu2.cloudfront.net/v1/master/0bc8e8376bd8417a1b6761138aa41c26c7309312/abp-news/master.m3u8",
        "clearkey": null,
        "stream_headers": null
    }
];

export default function handler(req, res) {
  let m3uStr = '#EXTM3U x-tvg-url="https://s0ndip.github.io/epg.xml.gz"\n\n';

  bannerChannels.forEach(channel => {
      m3uStr += `#EXTINF:-1 tvg-id="${channel.tvg_id}" tvg-logo="${channel.tvg_logo}" `;
      m3uStr += `tvg-chno="${channel.tvg_chno}" group-title="${channel.group_title}",${channel.name}\n`;
      if (channel.clearkey) {
          m3uStr += `#KODIPROP:inputstream.adaptive.license_type=clearkey\n`;
          m3uStr += `#KODIPROP:inputstream.adaptive.license_key=${channel.clearkey}\n`;
      }
      if (channel.stream_headers) {
          m3uStr += `#EXTVLCOPT:http-user-agent=${channel.stream_headers}\n`;
      }
      m3uStr += `${channel.stream_url}\n\n`;
  });

  res.status(200).send(m3uStr);
}
