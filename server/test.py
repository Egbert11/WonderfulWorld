#-*- coding:utf-8 -*-
import jinja2,os,web

urls = (
	'/','index'
)

class index:
    def GET(self):
	templateLoader = jinja2.FileSystemLoader('/home/huangjiam/git/wonderfulworld' )
	templateEnv = jinja2.Environment( loader=templateLoader )

	template = templateEnv.get_template('admin.html' )

	# Here we add a new input variable containing a list.
	# Its contents will be expanded in the HTML as a unordered list.
	templateVars = {
	"roomid":100,
	"miccard" : [
	{	
		"uid": 20053620, 
	 	"m3u8": "http://192.168.11.42:5566/redirect/video/7932872.m3u8?secret=cf8fcf5bda", 
	 	"visitor": 1,
		 "channelid": 20002, 
	 	"cover": "/image/avatar.png",  
		 "livetype": "miccard",
	 	"title": "beautiful", 
		 "roomid": 100
	},
	{	
		"uid": 20053621, 
	 	"m3u8": "http://192.168.11.42:5566/redirect/video/7932872.m3u8?secret=cf8fcf5bda", 
	 	"visitor": 1,
		 "channelid": 20002, 
	 	"cover": "/image/avatar.png",  
		 "livetype": "miccard",
	 	"title": "beautiful", 
		 "roomid": 101
	},
	{	
		"uid": 20053622, 
	 	"m3u8": "http://192.168.11.42:5566/redirect/video/7932872.m3u8?secret=cf8fcf5bda", 
	 	"visitor": 1,
		 "channelid": 20002, 
	 	"cover": "/image/avatar.png",  
		 "livetype": "miccard",
	 	"title": "beautiful", 
		 "roomid": 102
	},
	{	
		"uid": 20053623, 
	 	"m3u8": "http://192.168.11.42:5566/redirect/video/7932872.m3u8?secret=cf8fcf5bda", 
	 	"visitor": 1,
		 "channelid": 20002, 
	 	"cover": "/image/avatar.png",  
		 "livetype": "miccard",
	 	"title": "beautiful", 
		 "roomid": 100
	}
	], 
	#"URL_PREFIX" : "http://192.168.11.42:8306/static/", 
	"URL_PREFIX" : "/", 
	"game" : [
	 {	
		"uid": 20053624, 
	 	"m3u8": "http://192.168.11.42:5566/redirect/video/7932872.m3u8?secret=cf8fcf5bda", 
	 	"visitor": 1,
		 "channelid": 20002, 
	 	"cover": "/image/game-living.png",  
		 "livetype": "game",
	 	"title": "hello world", 
		 "roomid": 100
	},
	{	
		"uid": 20053625, 
	 	"m3u8": "http://192.168.11.42:5566/redirect/video/7932872.m3u8?secret=cf8fcf5bda", 
	 	"visitor": 1,
		 "channelid": 20002, 
	 	"cover": "/image/game-living.png",  
		 "livetype": "game",
	 	"title": "hello world", 
		 "roomid": 100
	},
	{	
		"uid": 20053626, 
	 	"m3u8": "http://192.168.11.42:5566/redirect/video/7932872.m3u8?secret=cf8fcf5bda", 
	 	"visitor": 1,
		 "channelid": 20002, 
	 	"cover": "/image/game-living.png",  
		 "livetype": "game",
	 	"title": "hello world", 
		 "roomid": 100
	},
	{	
		"uid": 20053627, 
	 	"m3u8": "http://192.168.11.42:5566/redirect/video/7932872.m3u8?secret=cf8fcf5bda", 
	 	"visitor": 1,
		 "channelid": 20002, 
	 	"cover": "/image/game-living.png",  
		 "livetype": "game",
	 	"title": "hello world", 
		 "roomid": 100
	},
	{	
		"uid": 20053628, 
	 	"m3u8": "http://192.168.11.42:5566/redirect/video/7932872.m3u8?secret=cf8fcf5bda", 
	 	"visitor": 1,
		 "channelid": 20002, 
	 	"cover": "/image/game-living.png",  
		 "livetype": "game",
	 	"title": "hello world", 
		 "roomid": 100
	}
	]
	}

	return template.render( templateVars )

app = web.application(urls,globals())
application = app.wsgifunc()
