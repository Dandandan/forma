use std::fmt;

use pretty::RcDoc;
use sqlparser::ast::{Expr, Ident, OrderByExpr};

use crate::constants::NEST_FACTOR;
use crate::doc::expr::expr_doc;

pub type FormaDoc<'a> = RcDoc<'a, ()>;

pub type Idents = Vec<Ident>;

pub type Exprs = Vec<Expr>;

pub struct EscapeSingleQuoteString<'a>(&'a str);

impl<'a> fmt::Display for EscapeSingleQuoteString<'a> {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        for c in self.0.chars() {
            if c == '\'' {
                write!(f, "\'\'")?;
            } else {
                write!(f, "{}", c)?;
            }
        }
        Ok(())
    }
}

pub fn escape_single_quote_string(s: &str) -> EscapeSingleQuoteString<'_> {
    EscapeSingleQuoteString(s)
}

/// Interweaves the provides documents with a comma.
pub fn interweave_comma<'a, D>(docs: D) -> FormaDoc<'a>
where
    D: Iterator<Item = FormaDoc<'a>>,
{
    RcDoc::intersperse(docs, RcDoc::text(",").append(RcDoc::line()))
}

/// Surrounds the provided document with parenthesis.
pub fn parenthenized(doc: FormaDoc<'_>) -> FormaDoc<'_> {
    RcDoc::text("(")
        .append(RcDoc::line_())
        .append(doc)
        .nest(NEST_FACTOR)
        .append(RcDoc::line_())
        .append(RcDoc::text(")"))
        .group()
}

pub fn order_by_doc<'a>(
    OrderByExpr {
        expr,
        asc,
        nulls_first,
    }: OrderByExpr,
) -> FormaDoc<'a> {
    expr_doc(expr)
        .append(if let Some(asc) = asc {
            RcDoc::line().append(if asc {
                RcDoc::text("asc")
            } else {
                RcDoc::text("desc")
            })
        } else {
            RcDoc::nil()
        })
        .append(if let Some(nulls_first) = nulls_first {
            RcDoc::line().append(if nulls_first {
                RcDoc::text("nulls first")
            } else {
                RcDoc::text("nulls last")
            })
        } else {
            RcDoc::nil()
        })
}

pub fn ident_doc<'a>(ident: Ident) -> FormaDoc<'a> {
    RcDoc::text(format!("{}", ident).to_lowercase())
}
