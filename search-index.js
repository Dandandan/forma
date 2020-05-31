var searchIndex = JSON.parse('{\
"forma":{"doc":"An opinionated SQL formatter","i":[[3,"Opt","forma","",null,null],[12,"input","","A SQL input to format; either a file path or stdin.",0,null],[12,"check","","Check if formatting would occur without applying it.",0,null],[12,"max_width","","The maximum allowed column width before wrapping.",0,null],[5,"write_formatted","","Given a writer, writes the given formatted buffers.",null,[[["vec",3],["string",3],["write",8]],["result",6]]],[5,"main","","Main entrypoint for the `forma` binary.",null,[[],["result",6]]],[17,"DEFAULT_MAX_WIDTH","","",null,null],[11,"from","","",0,[[]]],[11,"into","","",0,[[]]],[11,"try_from","","",0,[[],["result",4]]],[11,"try_into","","",0,[[],["result",4]]],[11,"borrow","","",0,[[]]],[11,"borrow_mut","","",0,[[]]],[11,"type_id","","",0,[[],["typeid",3]]],[11,"clap","","",0,[[],["app",3]]],[11,"from_clap","","",0,[[["argmatches",3]]]],[11,"augment_clap","","",0,[[["app",3]],["app",3]]],[11,"is_subcommand","","",0,[[]]]],"p":[[3,"Opt"]]},\
"formation":{"doc":"An opinionated SQL formatter","i":[[0,"error","formation","Error module",null,null],[4,"FormaError","formation::error","Forma error type.",null,null],[13,"InvalidInput","","Unable to parse given input as SQL.",0,null],[13,"WouldFormat","","Formatting would occur, i.e. when `check` is `true`.",0,null],[13,"TransformationFailure","","A transformation failure that wraps `io::Error`.",0,null],[13,"Utf8Failure","","A UTF-8 failure.",0,null],[6,"Result","","An alias for a `std::result::Result` that pins `FormaError`.",null,null],[0,"format","formation","The primary formatting interface",null,null],[5,"format","formation::format","Formats a given SQL string in accordance with the given…",null,[[["string",3]],[["vec",3],["result",6]]]],[11,"from","formation::error","",0,[[]]],[11,"into","","",0,[[]]],[11,"to_string","","",0,[[],["string",3]]],[11,"try_from","","",0,[[],["result",4]]],[11,"try_into","","",0,[[],["result",4]]],[11,"borrow","","",0,[[]]],[11,"borrow_mut","","",0,[[]]],[11,"type_id","","",0,[[],["typeid",3]]],[11,"from","","",0,[[["parsererror",4]]]],[11,"from","","",0,[[["error",3]]]],[11,"from","","",0,[[["fromutf8error",3]]]],[11,"fmt","","",0,[[["formatter",3]],["result",6]]],[11,"fmt","","",0,[[["formatter",3]],["result",6]]],[11,"source","","",0,[[],[["error",8],["option",4]]]]],"p":[[4,"FormaError"]]}\
}');
addSearchOptions(searchIndex);initSearch(searchIndex);