import React from "react";
import "./Btn.css";


// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const Btn = props => {
  switch (props.type){
    default:
    return(<button {...props}>
      Button
      </button>);
    break;
    case "delete":
    return(<button {...props} >
    Delete Article
    </button>);
    break;
    case "save":
    return(<button {...props}>
    Save Article
    </button>);
    break;
    case "add-note":
    return(<button {...props} >
    Add Note
    </button>);
    break;
    case "delete-note":
    return(<button {...props}>
    Delete Note
    </button>);
    break;
    case "view-note":
    return(<button {...props}>
    View/Add Note
    </button>);
    break;

  }
};

export default Btn;
