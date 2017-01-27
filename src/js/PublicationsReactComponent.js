
var year2011 = [
  ["",
  "Resistance of bulky DNA lesions to nucleotide excision repair can result from extensive aromatic lesion-base stacking interactions.  Nucleic Acids Res. 2011, 39(20): 8752-64",
  "Reeves DA, Mu H, Kropachev K, Cai Y, Ding S, Kolbanovskiy A, Kolbanovskiy M, Chen Y, Krzeminski J, Amin S, Patel DJ, Broyde S, Geacintov NE. "
  ],
  
  ["http://www.ncbi.nlm.nih.gov/pubmed/21741328",
  "Probing for DNA damage with β-hairpins: Similarities in  incision efficiencies of bulky DNA adducts by prokaryotic and human nucleotide  excision repair systems in vitro.</a> <em>DNA  Repair (Amst), 2011, 10(7):684-96.  PMID:  21741328.",
  "Liu Y, Reeves D,  Kropachev K, Cai Y, Ding S, Kolbanovskiy M, Kolbanovskiy A, Bolton JL, Broyde  S, Van Houten B, Geacintov NE."
  ],

  ["http://www.ncbi.nlm.nih.gov/pubmed/20964331",
  "A bulky DNA lesion derived from a  highly potent polycyclic aromatic tumorigen stabilizes nucleosome core particle  structure. Biochemistry, 2011, 23;49(46):9943-5.   PMID:20964331.",
  "Cai Y, Wang L,  Ding S, Schwaid A, Geacintov NE,  Broyde S."
  ],

  ["http://www.ncbi.nlm.nih.gov/pubmed/21361377",
  "Intercalative conformations of the 14R (+)- and 14S  (-)-trans-anti-DB[a,l]P-N⁶-dA adducts: molecular modeling and MD simulations.Chem  Res Toxicol. 2011, 24(4):522-31.   PMID: 21361377.",
  "Cai Y, Ding S, Geacintov NE, Broyde S."
  ],
  
  ["http://www.ncbi.nlm.nih.gov/pubmed/21114286",
  "Inefficient nucleotide excision repair in human cell  extracts of the N-(deoxyguanosin-8-yl)-6-aminochrysene and  5-(deoxyguanosin-N(2)-yl)-6-aminochrysene adducts derived from 6-nitrochrysene.Chem Res Toxicol 2011, 24(1):65-72.  PMID: 21114286.",
  "Krzeminski J,  Kropachev K, Kolbanovskiy M, Reeves D, Kolbanovskiy A, Yun BH, Geacintov NE, Amin S, El-Bayoumy K."
  ],
  
  ["http://www.ncbi.nlm.nih.gov/pubmed/21656632",
  "Solvent Exposure Associated with  Single Abasic Sites Alters the Base Sequence Dependence of Oxidation of Guanine  in DNA in GG Sequence Contexts.ChemBiochem 2011, 12(11):1731-9. PMID:21656632.",
  "Lee YA, Liu Z,  Dedon PC, Geacintov NE,  Shafirovich V."
  ],

  ["",
  "Generation of guanine-thymidine  cross-links in DNA by peroxynitrite/ carbon dioxide. Chem Res Toxicol. 2011, 24(7):1144-52",
  "Yun BH, Geacintov NE, Shafirovich V."
  ],

  ["",
  "PCNA ubiquitination is  important, but not essential for translesion DNA synthesis in mammalian  cells. PLoS Genet. 2011 Sep; 7(9):e1002262.",
  "Hendel A, Krijger PH, Diamant N, Goren Z, Langerak P, Kim J, Reissner T,  Lee KY, Geacintov NE, Carell T, Myung K, Tateishi S, D'Andrea A, Jacobs H,  Livneh Z."
  ]

]



var Publications = React.createClass({
  getInitialState: function() {
    return {year: 2011
    };
  },
  handleYearChange: function(e) {
    this.setState({year:e.target.value});
  },

  handleData: function() {
    var list = [""];
    if(this.state.year == 2011)
      list = year2011;
    if(this.state.year == 2012)
      list = [""];
    if(this.state.year == 2013)
      list = [""];
    if(this.state.year == 2014)
      list = [""];
    if(this.state.year == 2015)
      list = [""];

    var authorStyle = {
      fontSize:"13px",
      fontFamily:"'Roboto'",
      color:"grey"
    }
    return(
          list.map(function(listValue,index){ 
            if(listValue[0] == "")
              return (
                  <div key = {index} className="list-group-item" style = {{fontSize:"15px"}}> {listValue[1]} <span style = {authorStyle}> {listValue[2]}</span> </div>
              )
            else
              return (
                  <a key = {index} className="list-group-item" href = {listValue[0]} style = {{fontSize:"15px"}}> {listValue[1]} <span style = {authorStyle}> {listValue[2]}</span> </a>
                )
          })
      )
  }

  ,
  render: function() {
    return (
        <div>
              <div className="form-check form-check-inline">
                <label className="form-check-label">
                  <input 
                    className="form-check-input" 
                    type="radio" 
                    name="inlineRadioOptions" 
                    classID="inlineRadio1" 
                    value={2011} 
                    /> 
                    2011
                </label>
              </div>


              <form role="form">
                  <div className="form-group">
                      <input classID="searchinput" className="form-control" type="search" placeholder="Search..." />
                  </div>
                  <div id="searchlist" className="list-group">
                      {this.handleData()}
                  </div>
              </form>

         </div>
    );
  }
});

ReactDOM.render(<Publications/>,document.getElementById('publicationReactJS'));
