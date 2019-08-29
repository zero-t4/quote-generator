# Quote-generator

Project purpose is to generate "smart-book" quotes from any book, and put it in a random gradient layer

## Getting Started

1) Join telegram (`chat|bot`) link - `...`


### Installing

How to get a development env running

Install node_modules

```
npm install
```

Or

```
yarn install
```


## Running the tests

N/A yet


## Deployment

N/A yet

## Built With

* [Trianglify](https://github.com/qrohlf/trianglify) - Nice SVG background generator 
* [canvas](https://github.com/Automattic/node-canvas) - Canvas generator on nodejs 

## Contributing

N/A yet

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available.


## License

This project is licensed under the GNU General Public License v3.0 - see the [LICENSE.md](LICENSE.md) file for details

## TODO

* Handle `npm i` error
```
Package 'libffi', required by 'gobject-2.0', not found
gyp: Call to './util/has_lib.sh freetype' returned exit status 0 while in binding.gyp. while trying to load binding.gyp
```
* Generate gradient image on nodejs and store to local memory
* Add ability to print text on image
* Connect with Telegram API
* Add `cron` to send all followers new generated content
