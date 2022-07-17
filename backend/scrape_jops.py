import markdown
import requests
import json
from bs4 import BeautifulSoup


URL = "https://raw.githubusercontent.com/abhiramg2021/jobs/main/README.md"
r = requests.get(URL).text

html = markdown.markdown(r)

soup = BeautifulSoup(html, 'html.parser')


out={}
for i, res in enumerate(soup.find_all('h2')):
    out[res.string]={
        "company-link" : soup.find_all('a')[i]['href'],
        "summary" : soup.find_all('p')[4*(i+1)-1].string,
        "duration" : soup.find_all('p')[4*(i+1)-2].string,
        "position" : soup.find_all('p')[4*(i+1)-3].string,
    }
    
with open('./jobs.json', 'w') as f:
    json.dump(out, f, indent=2)



