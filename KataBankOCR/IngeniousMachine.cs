namespace KataBankOCR
{
    public class IngeniousMachine
    {
        public static string Parse(string numero)
        {
            int numDigitos = numero.Length / 9;
            int numCaracteresFila = numero.Length / 3;
            string digito;
            string numeroResultado = "";

            for (int i = 0; i < numDigitos; i++)
            {
                digito = numero.Substring(3 * i, 3);
                digito += numero.Substring(3 * i + numCaracteresFila, 3);
                digito += numero.Substring(3 * i + numCaracteresFila * 2, 3);
                numeroResultado += DevuelveNumero(digito);
            }

            return numeroResultado;
        }

        public static bool ChecksumIsValid(string numero)
        {
            string numeroResultado = Parse(numero);
            int numeroSuma = 0;

            for (int i = 0; i< numeroResultado.Length; i++)
            {
                numeroSuma += int.Parse(numeroResultado[i].ToString());
            }

            return numeroSuma % 11 == 0;
        }

        private static string DevuelveNumero(string numero)
        {
            if (numero.Equals(@" _ " +
                               "| |" +
                               "|_|"))
            {
                return "0";
            }
            else if (numero.Equals(@"   " +
                                    "  |" +
                                    "  |"))
            {
                return "1";
            }
            else if (numero.Equals(@" _ " +
                                    " _|" +
                                    "|_ "))
            {
                return "2";
            }
            else if (numero.Equals(@" _ " +
                                    " _|" +
                                    " _|"))
            {
                return "3";
            }
            else
            {
                return "4";
            }
        }

    }
}
