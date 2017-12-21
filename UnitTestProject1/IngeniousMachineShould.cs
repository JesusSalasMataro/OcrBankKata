using Microsoft.VisualStudio.TestTools.UnitTesting;
using KataBankOCR;

namespace UnitTestProject1
{
    [TestClass]
    public class IngeniousMachineShould
    {
        [TestMethod]
        public void devolver_cero()
        {
            string numero = @" _ " +
                             "| |" +
                             "|_|";

            Assert.AreEqual("0", IngeniousMachine.Parse(numero));
        }

        [TestMethod]
        public void devolver_uno()
        {
            string numero = @"   " +
                             "  |" +
                             "  |";

            Assert.AreEqual("1", IngeniousMachine.Parse(numero));
        }

        [TestMethod]
        public void devolver_dos()
        {
            string numero = @" _ " +
                             " _|" +
                             "|_ ";

            Assert.AreEqual("2", IngeniousMachine.Parse(numero));
        }

        [TestMethod]
        public void devolver_tres()
        {
            string numero = @" _ " +
                             " _|" +
                             " _|";

            Assert.AreEqual("3", IngeniousMachine.Parse(numero));
        }

        [TestMethod]
        public void devolver_uno_tres()
        {
            string numero = @"    _ " +
                             "  | _|" +
                             "  | _|";

            Assert.AreEqual("13", IngeniousMachine.Parse(numero));
        }

        [TestMethod]
        public void devolver_cero_uno()
        {
            string numero = @" _    " +
                             "| |  |" +
                             "|_|  |";

            Assert.AreEqual("01", IngeniousMachine.Parse(numero));
        }

        [TestMethod]
        public void devolver_cero_uno_cuatro()
        {
            string numero = @" _       " +
                             "| |  ||_|" +
                             "|_|  |  |";

            Assert.AreEqual("014", IngeniousMachine.Parse(numero));
        }

        [TestMethod]
        public void devolver_dos_tres_uno_cero_dos()
        {
            string numero = @" _  _     _  _ " +
                             " _| _|  || | _|" +
                             "|_  _|  ||_||_ ";

            Assert.AreEqual("23102", IngeniousMachine.Parse(numero));
        }

        [TestMethod]
        public void devolver_checksum_valido()
        {
            string numero = @" _  _        _  _ " +
                             " _| _|  |  | _| _|" +
                             "|_  _|  |  ||_ |_ ";

            Assert.IsTrue(IngeniousMachine.ChecksumIsValid(numero));
        }

        [TestMethod]
        public void devolver_checksum_no_valido()
        {
            string numero = @" _  _        _  _ " +
                             " _| _|  |  | _| _|" +
                             "|_  _|  |  ||_  _| ";

            Assert.IsFalse(IngeniousMachine.ChecksumIsValid(numero));
        }
    }
}
