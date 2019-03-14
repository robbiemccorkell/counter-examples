import UIKit
import PlaygroundSupport

class MyViewController : UIViewController {
    var counter = 0
    
    var label : UILabel!

    override func loadView() {
        let view = UIView()
        view.backgroundColor = .white

        label = UILabel()
        label.frame = CGRect(x: 150, y: 200, width: 200, height: 20)
        setLabelText()
        setLabelColor()
        
        let plusButton = UIButton()
        plusButton.frame = CGRect(x: 150, y: 240, width: 20, height: 20)
        plusButton.setTitle("-", for: .normal)
        plusButton.setTitleColor(UIColor.blue, for: .normal)
        plusButton.layer.borderWidth = 2
        plusButton.layer.borderColor = UIColor.gray.cgColor
        plusButton.layer.cornerRadius = 5
        plusButton.addTarget(self, action: #selector(minusTapped), for: .touchUpInside)
        
        let minusButton = UIButton()
        minusButton.frame = CGRect(x: 180, y: 240, width: 20, height: 20)
        minusButton.setTitle("+", for: .normal)
        minusButton.setTitleColor(UIColor.blue, for: .normal)
        minusButton.layer.borderWidth = 2
        minusButton.layer.borderColor = UIColor.gray.cgColor
        minusButton.layer.cornerRadius = 5
        minusButton.addTarget(self, action: #selector(plusTapped), for: .touchUpInside)
        
        view.addSubview(label)
        view.addSubview(plusButton)
        view.addSubview(minusButton)
        self.view = view
    }
    
    @objc func plusTapped() {
        counter += 1
        setLabelText()
        setLabelColor()
    }
    
    @objc func minusTapped() {
        counter -= 1
        setLabelText()
        setLabelColor()
    }
    
    func setLabelText() {
        label.text = getLabelText()
    }
    
    func getLabelText() -> String {
        return "Count: \(counter)"
    }
    
    func setLabelColor() {
        let labelColor = getLabelColor()
        if (label.textColor != labelColor) {
            label.textColor = labelColor
        }
    }
    
    func getLabelColor() -> UIColor {
        if (counter % 3 == 0 && counter % 5 == 0) {
            return .blue;
        } else if (counter % 3 == 0) {
            return .red;
        } else if (counter % 5 == 0) {
            return .green;
        } else {
            return .black;
        }
    }
}

PlaygroundPage.current.liveView = MyViewController()
