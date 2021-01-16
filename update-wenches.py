import requests

wench_domains_url = "https://raw.githubusercontent.com/Bon-Appetit/porn-domains/master/domains.txt"

wenches = requests.get(wench_domains_url).text.splitlines()
with open("wench_list.js", "w") as wenchesFile:
    wenchesFile.write(
        "let wenches = \"" + " ".join(wenches) + "\".split(\" \");"
    )