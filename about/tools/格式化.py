# -*- coding: utf-8 -*-


import re
from bs4 import BeautifulSoup

# wenjianmings = ["index.html","index-2.html","knowledge.html","secworld.html","network.html","foreignsec.html","sharpweapon.html","job.html"]

def class_bs4(wenjianming):

	fh = open(wenjianming,encoding='utf-8')
	soup = BeautifulSoup(fh,"lxml")
	titles = soup.find_all('a',class_='card-heading link-tooltip')
	return titles  # i.get("href"),i.get("title")

def pp2(ss):
	pp3 = re.compile(r'=(.*?)&')
	return pp3.search(ss).group(1)


def main(wenjian):
	pp  = re.compile(r'index.*?&LinkId=\d+')
	pp2 = re.compile(r'=(.*?)&')
	for i in pp.findall(open(wenjian,encoding='utf-8').read()):
		print(pp2.search(i).group(1))
		print(i)
		print(pp.sub(pp2,open(wenjian,encoding='utf-8').read()))
	# url = re.sub(href,title,open(wenjian,encoding='utf-8').read())
	# open(wenjian, "w", encoding='utf-8').write(url)

main("indexa.html")