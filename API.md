# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NpmLambda <a name="NpmLambda" id="@jayhuss/npm-zip-lambda.NpmLambda"></a>

A CDK construct to create Lambda functions.

#### Initializers <a name="Initializers" id="@jayhuss/npm-zip-lambda.NpmLambda.Initializer"></a>

```typescript
import { NpmLambda } from '@jayhuss/npm-zip-lambda'

new NpmLambda(parent: Construct, name: string, props: NpmLambdaProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@jayhuss/npm-zip-lambda.NpmLambda.Initializer.parameter.parent">parent</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@jayhuss/npm-zip-lambda.NpmLambda.Initializer.parameter.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@jayhuss/npm-zip-lambda.NpmLambda.Initializer.parameter.props">props</a></code> | <code><a href="#@jayhuss/npm-zip-lambda.NpmLambdaProps">NpmLambdaProps</a></code> | *No description.* |

---

##### `parent`<sup>Required</sup> <a name="parent" id="@jayhuss/npm-zip-lambda.NpmLambda.Initializer.parameter.parent"></a>

- *Type:* constructs.Construct

---

##### `name`<sup>Required</sup> <a name="name" id="@jayhuss/npm-zip-lambda.NpmLambda.Initializer.parameter.name"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@jayhuss/npm-zip-lambda.NpmLambda.Initializer.parameter.props"></a>

- *Type:* <a href="#@jayhuss/npm-zip-lambda.NpmLambdaProps">NpmLambdaProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@jayhuss/npm-zip-lambda.NpmLambda.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@jayhuss/npm-zip-lambda.NpmLambda.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@jayhuss/npm-zip-lambda.NpmLambda.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@jayhuss/npm-zip-lambda.NpmLambda.isConstruct"></a>

```typescript
import { NpmLambda } from '@jayhuss/npm-zip-lambda'

NpmLambda.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@jayhuss/npm-zip-lambda.NpmLambda.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@jayhuss/npm-zip-lambda.NpmLambda.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="@jayhuss/npm-zip-lambda.NpmLambda.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


## Structs <a name="Structs" id="Structs"></a>

### NpmLambdaProps <a name="NpmLambdaProps" id="@jayhuss/npm-zip-lambda.NpmLambdaProps"></a>

#### Initializer <a name="Initializer" id="@jayhuss/npm-zip-lambda.NpmLambdaProps.Initializer"></a>

```typescript
import { NpmLambdaProps } from '@jayhuss/npm-zip-lambda'

const npmLambdaProps: NpmLambdaProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@jayhuss/npm-zip-lambda.NpmLambdaProps.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@jayhuss/npm-zip-lambda.NpmLambdaProps.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `description`<sup>Required</sup> <a name="description" id="@jayhuss/npm-zip-lambda.NpmLambdaProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@jayhuss/npm-zip-lambda.NpmLambdaProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---



