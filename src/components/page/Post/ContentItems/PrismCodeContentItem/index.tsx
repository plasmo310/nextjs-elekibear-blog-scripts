/**
[指定できる言語 (参考)]
※プラグイン内に追加していない言語もあるため、使用できない場合は公式サイトからCSSをダウンロードしてください.

markup, css, clike, javascript, abap, abnf, actionscript, ada, agda, al, antlr4,
apacheconf, apex, apl, applescript, aql, arduino, arff, armasm, arturo, asciidoc,
aspnet, asm6502, asmatmel, autohotkey, autoit, avisynth, avro-idl, awk, bash,
basic, batch, bbcode, bbj, bicep, birb, bison, bnf, bqn, brainfuck, brightscript,
bro, bsl, c, csharp, cpp, cfscript, chaiscript, cil, cilkc, cilkcpp, clojure,
cmake, cobol, coffeescript, concurnas, csp, cooklang, coq, crystal, css-extras,
csv, cue, cypher, d, dart, dataweave, dax, dhall, diff, django, dns-zone-file,
docker, dot, ebnf, editorconfig, eiffel, ejs, elixir, elm, etlua, erb, erlang,
excel-formula, fsharp, factor, false, firestore-security-rules, flow, fortran,
ftl, gml, gap, gcode, gdscript, gedcom, gettext, gherkin, git, glsl, gn,
linker-script, go, go-module, gradle, graphql, groovy, haml, handlebars,
haskell, haxe, hcl, hlsl, hoon, http, hpkp, hsts, ichigojam, icon, icu-message-format,
idris, ignore, inform7, ini, io, j, java, javadoc, javadoclike, javastacktrace,
jexl, jolie, jq, jsdoc, js-extras, json, json5, jsonp, jsstacktrace, js-templates,
julia, keepalived, keyman, kotlin, kumir, kusto, latex, latte, less, lilypond,
liquid, lisp, livescript, llvm, log, lolcode, lua, magma, makefile, markdown,
markup-templating, mata, matlab, maxscript, mel, mermaid, metafont, mizar,
mongodb, monkey, moonscript, n1ql, n4js, nand2tetris-hdl, naniscript, nasm,
neon, nevod, nginx, nim, nix, nsis, objectivec, ocaml, odin, opencl, openqasm,
oz, parigp, parser, pascal, pascaligo, psl, pcaxis, peoplecode, perl, php,
phpdoc, php-extras, plant-uml, plsql, powerquery, powershell, processing,
prolog, promql, properties, protobuf, pug, puppet, pure, purebasic, purescript,
python, qsharp, q, qml, qore, r, racket, cshtml, jsx, tsx, reason, regex, rego,
renpy, rescript, rest, rip, roboconf, robotframework, ruby, rust, sas, sass, scss,
scala, scheme, shell-session, smali, smalltalk, smarty, sml, solidity, solution-file,
soy, sparql, splunk-spl, sqf, sql, squirrel, stan, stata, iecst, stylus, supercollider,
swift, systemd, t4-templating, t4-cs, t4-vb, tap, tcl, tt2, textile, toml, tremor,
turtle, twig, typescript, typoscript, unrealscript, uorazor, uri, v, vala, vbnet,
velocity, verilog, vhdl, vim, visual-basic, warpscript, wasm, web-idl, wgsl, wiki,
wolfram, wren, xeora, xml-doc, xojo, xquery, yaml, yang, zig

 */

import { css } from '@emotion/react';
import FoldToggle from 'components/common/FoldToggle';

const styleDetailText = css`
  margin-top: -4px;
  margin-left: 4px;
`;

/**
 * Prismコードブロック
 * @param props
 * @returns
 */
const PrismCodeContentItem = (props: {
  children: React.ReactNode;
  language: string;
  fileName: string;
  toggleText: string;
  detailText: string;
}) => {
  let children = props.children;
  if (typeof children !== 'string') {
    console.log('PrismCodeContentItem contains an invalid element!!');
    return;
  }

  // 一部文字は埋め込めないためエスケープする
  children = children.replaceAll('\\`', '`');

  const prismElement = (
    <>
      <div className="hcb_wrap">
        <pre
          className={'prism line-numbers lang-' + props.language}
          data-file={props.fileName}
        >
          <code>{children}</code>
        </pre>
        {props.detailText ? (
          <div css={styleDetailText}>{props.detailText}</div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
  return (
    <>
      {props.toggleText ? (
        <FoldToggle text={props.toggleText}>{prismElement}</FoldToggle>
      ) : (
        <>{prismElement}</>
      )}
    </>
  );
};
export default PrismCodeContentItem;
