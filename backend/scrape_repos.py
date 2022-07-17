import requests
import os
from dotenv import load_dotenv
import json

load_dotenv()
token = os.getenv('BEARER')


url = "https://api.github.com/user/repos"

headers = {
  'Authorization': 'Bearer ' + token
}

res = requests.request("GET", url, headers=headers)
repos = res.json()
out = {}

for repo in repos:

    topics = repo['topics']

    if 'project' in topics:
        url = repo['html_url']
        default_branch = repo['default_branch']
        img_url = url + '/tree/' + default_branch + '/media/profile.png'

        out[repo['name']]={ 
                    "desc" : repo['description'],
                    "git_url": url,
                    "project_url" : repo['homepage'],
                    "img_url" : img_url}

with open('./projects.json', 'w') as f:
    json.dump(out, f, indent=2)






