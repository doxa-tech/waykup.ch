**The content has been moved to https://github.com/doxa-tech/bullenetwork-constellation**

---

Waykup website: https://waykup.ch

![waykup.ch deploy](https://github.com/doxa-tech/waykup.ch/workflows/waykup.ch%20deploy/badge.svg)

## Deploy

Updating the production branch will trigger a deploy action that updates the
production server. The production branch must only be used for that purpose. A
standard deploy involves merging the master branch into the production branch:

```bash
# get the latest update from master locally
git pull
# merge master into production
git push origin master:production
```
