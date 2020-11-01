# Markdown to HTML Converter

Foobar is a Python library for dealing with word pluralization.

## Installation

```bash
npm i
```

## Start

```bash
npm run start
```

## Tests

```bash
npm run test
```

## Test Coverage

```bash
npm run coverage
```

## Local Testing

POST Raw Text to <http://localhost:4333/dev/convert>

## AWS Deployed Testing

POST Raw Text to <https://763xdrzzvd.execute-api.us-east-1.amazonaws.com/dev/convert>

## Sample Body

```
# Header one

Hello there

How are you?
What's going on?

## Another Header

This is a paragraph [with an inline link](http://google.com). Neat, eh?

## This is a header [with a link](http://yahoo.com)
```

## Sample Response

```
<html>

<body>
	<h1>Header one</h1>
	<p>Hello there</p>
	<p>How are you?</p>
	<p>What's going on?</p>
	<h2>Another Header</h2>
	<p>This is a paragraph <a href="http://google.com">with an inline link</a>. Neat, eh?</p>
	<h2>This is a header <a href="http://yahoo.com">with a link</a></h2>
</body>

</html>
```
